import { useEffect, useState } from "react";

export function useForm(
  initialFValues,
  validateOnChange = false,
  validate = () => {},
  configData = false
) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (configData) {
      setValues(initialFValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFValues]);

  const handleInputChange = (e, namefordrop, check = false) => {
    var final_name;
    var final_value;

    if (e.target) {
      const { name, value, files, checked } = e?.target;
      final_name = name;
      if (name === "phone_number" || name === "return_qty") {
        if (!new RegExp(/^[0-9]*$/).test(value)) return;
      }

      if (files?.length > 0 && !check) {
        final_value = files[0];
        setValues({
          ...values,
          [name]: files[0],
          [`${name}_preview`]: URL.createObjectURL(files[0]),
        });
      } else if (!files && !check) {
        final_value = value;
        setValues({
          ...values,
          [name]: value,
        });
      } else if (check) {
        final_name = name;
        final_value = checked;
        setValues({
          ...values,
          [name]: checked,
        });
      }
    }
    if (validateOnChange) validate({ [final_name]: final_value });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
}
