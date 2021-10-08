export default {
  firstName: {
    placeholder: "firstName",
    validation: {
      required: "required",
      maxLength: 50,
      pattern: {
        value: null,
        message: null,
      },
    },
  },
  lastName: {
    placeholder: "lastName",
    validation: {
      required: "required",
      maxLength: 50,
      pattern: {
        value: null,
        message: null,
      },
    },
  },
  address: {
    placeholder: "address",
    validation: {
      required: "required",
      maxLength: 100,
      pattern: {
        value: null,
        message: null,
      },
    },
  },
  unit: {
    placeholder: "unit",
    maxLength: 50,
    validation: {
      required: "required",
      pattern: {
        value: null,
        message: null,
      },
    },
  },
  city: {
    placeholder: "city",
    maxLength: 40,
    validation: {
      required: "required",
      pattern: {
        value: null,
        message: null,
      },
    },
  },
  state: {
    placeholder: "state",
    maxLength: 2,
    validation: {
      required: "required",
      pattern: {
        value: /^[a-zA-Z]+$/,
        message: "min 3",
      },
    },
  },
  zipcode: {
    placeholder: "zipcode",
    maxLength: 5,
    validation: {
      required: "required",
      pattern: {
        value: /^\d$/,
        message: "Numbers only",
      },
    },
  },
  phone: {
    placeholder: "phone",
    maxLength: 10,
    validation: {
      required: "required",
      pattern: {
        value: /^\d$/,
        message: "Numbers only",
      },
    },
  },
  email: {
    placeholder: "phone",
    maxLength: 10,
    validation: {
      required: "required",
      pattern: {
        value: /^\w+([-+.']\w+)_@\w+([-.]\w+)_\.\w+([-.]\w+)\*$/,
        message: "Invalid email",
      },
    },
  },
  ssn: {
    placeholder: "phone",
    maxLength: 9,
    validation: {
      required: "required",
      pattern: {
        value: /^\d$/,
        message: "Numbers onlyrs only",
      },
    },
  },
  password: {
    placeholder: "phone",
    maxLength: 10,
    validation: {
      required: "required",
      pattern: {
        value: null,
        message: null,
      },
    },
  },
  productId: {
    placeholder: "phone",
    maxLength: 10,
    validation: {
      required: "required",
      pattern: {
        value: null,
        message: null,
      },
    },
  },
  ticketNumber: {
    placeholder: "phone",
    maxLength: 10,
    validation: {
      required: "required",
      pattern: {
        value: null,
        message: null,
      },
    },
  },
};
