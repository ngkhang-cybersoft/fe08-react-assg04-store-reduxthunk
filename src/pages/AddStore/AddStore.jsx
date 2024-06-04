import { Button, Col, Form, Input, Row } from 'antd';

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

const AddStore = () => {
  return (
    <>
      <h2 className="text-center mb-3">Add new store</h2>
      <div className="d-flex justify-content-center">
        <Form {...configForm} className="justify-content-between py-4">
          <Form.Item
            label="Store Name"
            name="Store Name"
            rules={[
              {
                required: true,
                message: 'Please store name!',
              },
            ]}
          >
            <Input style={{}} />
          </Form.Item>

          <Form.Item label="Image" name="Image">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="Description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="LatLong" label="Lat and Long">
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="Lattitude" noStyle>
                  <Input placeholder="Lattitude" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="Longtitude" noStyle>
                  <Input placeholder="Longtitude" />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            className="mb-0"
            name="Action"
            wrapperCol={{
              span: 23,
            }}
          >
            <Row justify="end">
              <Col className="me-2">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
              <Col>
                <Button type="default" htmlType="reset">
                  Reset
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default AddStore;
