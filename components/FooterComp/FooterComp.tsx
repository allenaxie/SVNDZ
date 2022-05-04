import classes from './FooterComp.module.scss';
import Link from 'next/link';
import { Row, Col, Form, Divider, Input, Button } from 'antd';
import { InstagramOutlined } from "@ant-design/icons";

const FooterComp = () => {
    return (
        <>
            <Row className={classes.footerContent}>
                <Col
                    xs={{span:24}}
                    lg={{span:4}} 
                    // span={4} 
                    className={classes.footerCol}
                
                >
                    <Link href="/">
                        <span className={classes.linkText}>
                            ORDER AND PAYMENT
                        </span>
                    </Link >
                    <Link href="/">
                        <span className={classes.linkText}>
                            SHIPPING & DELIVERY
                        </span>
                    </Link >
                    <Link href="/">
                        <span className={classes.linkText}>
                            RETURNS
                        </span>
                    </Link >
                    <Link href="/">
                        <span className={classes.linkText}>
                            SIZE GUIDE
                        </span>
                    </Link >
                </Col>
                <Col 
                    xs={{span:24}}
                    lg={{span:4}}  
                    className={classes.footerCol}
                >
                    <Link href="/">
                        <span className={classes.linkText}>
                            PRIVACY POLICY
                        </span>
                    </Link>
                    <Link href="/">
                        <span className={classes.linkText}>
                            TERMS OF SERVICE
                        </span>
                    </Link>
                </Col>
                <Col 
                    xs={{span:24}}
                    lg={{span:4}} 
                    className={classes.footerCol}
                >
                    <Link href='/' >
                        <span className={classes.linkText}>
                            CONTACT US
                        </span>
                    </Link>
                </Col>
                <Col 
                    xs={{span:24}}
                    lg={{span:4}} 
                    className={classes.footerCol}
                >
                    <span>CONNECT WITH US</span>
                    <a 
                        href="https://www.instagram.com/svndz_official/" 
                        target="_blank" 
                        rel="noreferrer"
                        className={classes.iGIcon} 
                    >
                        <InstagramOutlined />
                    </a>
                </Col>
                <Col 
                    xs={{span:24}}
                    lg={{span:4}} 
                    className={classes.footerCol}
                >
                    <span>
                        SUBSCRIBE TO OUR NEWSLETTER
                    </span>
                    <Form
                        className={classes.form}
                        name="newsletter form"
                    >
                        <Form.Item
                            className={classes.emailFormItem}
                            name="email"
                            rules={[{ required: true, message: 'Please input a valid email address.' }]}
                        >
                            <Input placeholder="Enter your email" type="email" />
                        </Form.Item>
                        <Form.Item className={classes.btnContainer}>
                            <Button htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row className={classes.copyrightContent}>
                <Divider className={classes.divider} />
                <span>
                    ©2022 SVNDZ
                </span>
            </Row>
        </>
    )
}

export default FooterComp;