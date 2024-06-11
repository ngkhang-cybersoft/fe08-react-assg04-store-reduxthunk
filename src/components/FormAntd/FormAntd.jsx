import { Button, Col, Form, Input, Row } from 'antd';
import useRedux from '../../hooks/useRedux';
import {
  addStoreAsync,
  updateStoreAsync,
} from '../../redux/reducers/storeReducer';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { configFields, configForm } from './configForm';

const FormAntd = ({ action, initialValues = {}, callback }) => {
  const navigate = useNavigate();
  const [, dispatch] = useRedux();
  const [form] = useForm();

  const fields = Object.entries(initialValues).map((item) => {
    return {
      name: item[0],
      value: item[1],
    };
  });

  const handleSubmit = async (values) => {
    const formatValues = {};
    for (const key in values) {
      formatValues[key] = values[key] ? values[key] : '';
    }
    const actionThunk =
      action === 'add'
        ? addStoreAsync(values)
        : updateStoreAsync(values.id, formatValues);
    let [statusCode] = await dispatch(actionThunk);
    if (statusCode === 200) {
      // TODO: Open toast when success
      action === 'add' ? navigate('/admin/store') : callback();
    }
  };

  const onReset = () => {
    const fieldReset = fields
      .filter((field) => field.name !== 'id' && field.name !== 'deleted')
      .map((field) => field.name);
    form.resetFields(fieldReset);
  };

  return (
    <>
      <Form
        form={form}
        {...configForm}
        fields={fields}
        onFinish={(values) => handleSubmit(values)}
        className="justify-content-between py-4"
      >
        <Form.Item {...configFields.id}>
          <Input />
        </Form.Item>

        <Form.Item {...configFields.name}>
          <Input />
        </Form.Item>

        <Form.Item {...configFields.image}>
          <Input />
        </Form.Item>

        <Form.Item {...configFields.description}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="LatLong" label="Lat and Long">
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...configFields.latitude}>
                <Input placeholder="Latitude" className="w-100" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...configFields.longtitude}>
                <Input className="w-100" placeholder="Longtitude" />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          className="mb-0"
          wrapperCol={{
            span: 23,
          }}
        >
          <Row justify="end">
            <Col className="me-2">
              <Button type="primary" htmlType="submit">
                {action === 'add' ? 'Submit' : 'Update'}
              </Button>
            </Col>
            <Col>
              <Button type="default" htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormAntd;
