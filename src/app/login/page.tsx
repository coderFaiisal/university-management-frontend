"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import loginBanner from "../../assets/login-banner.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

interface FormValues {
  id: string;
  password: string;
}

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log("data: ", data);
    } catch (error) {}
  };

  return (
    <Row>
      <Col sm={12} md={16} lg={16}>
        <Image src={loginBanner} alt="login-banner" width={600} />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1>First Login Your Account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                label="ID"
                name="id"
                type="text"
                size="large"
                placeholder="Your ID"
              />
            </div>
            <div>
              <FormInput
                label="Password"
                name="password"
                type="password"
                size="large"
                placeholder="Your Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
