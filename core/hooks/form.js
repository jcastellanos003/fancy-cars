import { useState } from 'react';

export const useForm = (cb) => {
  const [fields, setFields] = useState({});

  const onSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    cb();
  };

  const onChange = (event) => {
    event.persist();
    setFields(fields => ({...fields, [event.target.name]: event.target.value}));
  };

  return {
    onSubmit,
    onChange,
    fields
  };
}
