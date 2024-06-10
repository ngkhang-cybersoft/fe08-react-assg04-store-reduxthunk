const configForm = {
  labelAlign: 'left',
  colon: false,
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 18,
  },
  layout: 'horizontal',
  size: 'large',
};

const configFields = {
  id: {
    label: 'Id',
    name: 'id',
    hidden: true,
  },
  name: {
    label: 'Store Name',
    name: 'name',
    rules: [
      {
        required: true,
        type: 'string',
        pattern: /^[a-zA-Z0-9 .,&'-]{3,50}$/,
        message:
          'Store name is not empty and must be between 3 and 50 characters',
      },
    ],
  },
  image: {
    label: 'Image',
    name: 'image',
  },
  description: {
    label: 'Description',
    name: 'description',
    rules: [
      {
        required: false,
        pattern:
          /^[a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ .,!?-]{5,200}$/,
        message: 'Must be between 5 and 200 characters long',
      },
    ],
  },
  latitude: {
    name: 'latitude',
    rules: [
      {
        required: false,
        message: 'The latitude must be between -180 and 180 degrees',
        pattern: /^(-?(1[0-7][0-9]|[1-9]?[0-9])(\.\d+)?|180(\.0+)?)$/,
      },
    ],
  },
  longtitude: {
    name: 'longtitude',
    rules: [
      {
        required: false,
        message: 'The longtitude must be between -180 and 180 degrees',
        pattern: /^(-?(1[0-7][0-9]|[1-9]?[0-9])(\.\d+)?|180(\.0+)?)$/,
      },
    ],
  },
};

export { configForm, configFields };
