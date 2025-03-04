import { FC, FormEvent, Fragment, useRef, useState } from "react";

import { CustomSelect } from "@/components/template";
import { Button, FieldError, Input, Label } from "@/components/base";

import { validateForm } from "@/utils/validate";
import { cities, countries, regions } from "@/data/country";
import { billingDetailSchema } from "@/schemas/checkout";
import { useOrder } from "@/context/OrderContext";

interface newAddressState {
  fullName?: string[] | undefined;
  phone?: string[] | undefined;
  country?: string[] | undefined;
  city?: string[] | undefined;
  region?: string[] | undefined;
  addressLine?: string[] | undefined;
}

interface NewAddressFormProps {
  isOpen: boolean;
  onClose: () => void;
}
const NewAddressForm: FC<NewAddressFormProps> = ({ isOpen, onClose }) => {
  const { setOrderItem } = useOrder();
  const [errors, setErrors] = useState<newAddressState>({
    fullName: [],
    phone: [],
    country: [],
    city: [],
    region: [],
    addressLine: [],
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const handleCountryChange = (value: string) => {
    setCountry(value);
  };

  const handleCityChange = (value: string) => {
    setCity(value);
  };

  const handleRegionChange = (value: string) => {
    setRegion(value);
  };

  const clearErrors = () =>
    setErrors({
      fullName: [],
      phone: [],
      country: [],
      city: [],
      region: [],
      addressLine: [],
    });

  const handleSetNewAddress = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget) return;

    clearErrors();

    const formData = new FormData(event.currentTarget);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("region", region);

    const validated = validateForm(formData, billingDetailSchema);
    if (!validated.success) {
      return setErrors({ ...validated.errors });
    }
    
    const newAddress = validated.data;
    setOrderItem("fullName", `${newAddress?.fullName}`);
    setOrderItem("phone", `${newAddress?.phone}`);
    setOrderItem(
      "shippingAddress",
      `${newAddress?.addressLine}, ${newAddress?.region}, ${newAddress?.city}, ${newAddress?.country}`
    );
    formRef.current?.reset();
    onClose();
  };

  return (
    <Fragment>
      {isOpen && (
        <div className="input-box-form">
          <form onSubmit={handleSetNewAddress} ref={formRef}>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="input-item">
                  <Label label={"Full Name*"}>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                    />
                  </Label>
                  <FieldError message={errors.fullName} />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="input-item">
                  <Label label={"Phone"}>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone"
                    />
                  </Label>
                  <FieldError message={errors.phone} />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="input-item">
                  <Label label={"Country *"}>
                    <CustomSelect
                      id="country"
                      options={countries}
                      onChange={handleCountryChange}
                    />
                  </Label>
                  <FieldError message={errors.country} />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="input-item">
                  <Label label={"City *"}>
                    <CustomSelect
                      id="city"
                      options={cities}
                      onChange={handleCityChange}
                    />
                  </Label>
                  <FieldError message={errors.city} />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="input-item">
                  <Label label={"Region *"}>
                    <CustomSelect
                      id="region"
                      options={regions}
                      onChange={handleRegionChange}
                    />
                  </Label>
                  <FieldError message={errors.region} />
                </div>
              </div>
              <div className="col-12">
                <div className="input-item">
                  <Label label={"Address Line *"}>
                    <Input
                      id="addressLine"
                      name="addressLine"
                      placeholder="Enter your address line"
                    />
                  </Label>
                  <FieldError message={errors.addressLine} />
                </div>
              </div>
              <div className="col-12">
                <div className="input-button">
                  <Button>Continue</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default NewAddressForm;
