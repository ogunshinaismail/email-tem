import React from 'react'
import { Button } from '@react-email/button';
import { Tailwind } from '@react-email/tailwind';
import { Text } from '@react-email/text';
import { Section } from '@react-email/section';
import { Column } from '@react-email/column';
import { Row } from "@react-email/row";
import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Font } from '@react-email/font';
import { Container } from '@react-email/container';
import { Body } from '@react-email/body'
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';

const Email = () => {
  return (
    <Tailwind>
        <Html lang="en">
            <Head>
                <Font
                fontFamily="Roboto"
                fallbackFontFamily="Verdana"
                webFont={{
                    url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                    format: 'woff2',
                }}
                fontWeight={400}
                fontStyle="normal"
                />
            </Head>
            
            <Body>
                {/* <Container className='w-[900px]'> */}
                    <Section className="bg-[#F4F4F6] w-10/12 mx-auto">
                        <Section className="w-10/12 mx-auto mt-10 mb-4">
                            <Img src="https://res.cloudinary.com/dwaaixvxk/image/upload/v1694205989/logo_f2uyh9.png" alt="Cat" />
                        </Section>

                        <Section className="w-10/12 mx-auto bg-white py-6 px-7 border-t-4 border-solid border-[#7065F0] my-5">
                            <Text className="text-black text-2xl font-bold">Successful Listing</Text>
                            <Text className="text-black text-base font-medium mt-3">Great news! Your property listing is now live. See how it looks to potential applicants by clicking the link below:</Text>

                            <Section className="bg-[#F4F4F6] p-3">
                                <Row className="mt-0">
                                    <Column className="w-[65%] mt-0">
                                        <Row className="mt-0">
                                            <Column className="mt-0">
                                                {/* <Img
                                                src={`${baseUrl}/static/apple-hbo-max-icon.jpeg`}
                                                width="64"
                                                height="64"
                                                alt="HBO Max"
                                                style={productIcon}
                                                /> */}
                                                <Section className="h-[80px] w-[80px] bg-black/70 mt-0"></Section>
                                            </Column>

                                            <Column className="mt-0">
                                                <Text className="text-lg font-bold my-0">2 Bedroom Flat</Text>
                                                <Text className="text-base font-medium text-black/40 my-0">Ikoyi, Lagos</Text>

                                                <Section className='my-0'>
                                                    <Row className="mt-0 w-[50%]">
                                                        {/* <Column className="mt-0 mr-0">
                                                            <Text className="text-lg font-bold mt-0">₦2,500,000.00<strong className="lg:text-base font-normal">/yr</strong></Text> 
                                                        </Column> */}

                                                        <Section >
                                                            <Text className="text-lg font-bold mt-0">₦2,500,000.00<strong className="lg:text-base font-normal">/yr</strong></Text> 
                                                            <Text className="mt-0"><strong>2</strong> bath</Text>
                                                            <Text className="mt-0"><strong>2</strong> bath</Text>
                                                        </Section>

                                                        {/* <Column className="mt-0"> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; </Column>

                                                        <Column className="mt-0">
                                                            <Text className="mt-0"><strong>2</strong> bed</Text>
                                                        </Column>

                                                        <Column className="mt-0"> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; </Column>

                                                        <Column className="mt-0">
                                                            <Text className="mt-0"><strong>2</strong> bath</Text>
                                                        </Column> */}
                                                    </Row>
                                                </Section>
                                            </Column>
                                        </Row>
                                    </Column>
                                </Row>

                                <Column  >
                                    <Button
                                        href=""
                                        className="bg-[#7065F0] px-5 py-2 rounded-lg font-bold text-base text-white"
                                    >
                                        View Listing
                                    </Button>
                                </Column>
                                
                            </Section>

                            <Text className="text-base font-medium">To view your listings on the PropertyPro, click <Link href="#" className="text-[#7065F0] text-lg font-bold">View Listing</Link></Text>
                            <Text className="text-base font-medium">To view your listings on the Spleet, click <Link href="#" className="text-[#7065F0] text-lg font-bold">View Listing</Link></Text>

                            <Text className="text-black text-base font-medium mt-3">Start engaging with interested tenants and manage your property's inquiries from your dashboard. For any assistance, reach out to our support team at support@porchplus.com</Text>

                            <Text className="text-black text-base font-medium mt-3">- The Porchplus Team</Text>
                        </Section>

                        <Section className="mt-{6rem}">
                            <Row className="w-[15%] mx-auto">
                                <Column>
                                    <Img src="https://res.cloudinary.com/dwaaixvxk/image/upload/v1694205989/twitter_ijjnig.png" alt="social" />
                                </Column>
                                <Column>
                                    <Img src="https://res.cloudinary.com/dwaaixvxk/image/upload/v1694205989/facebook_dshwlj.png" alt="social" />
                                </Column>
                                <Column>
                                    <Img src="https://res.cloudinary.com/dwaaixvxk/image/upload/v1694205989/instagram_kjbbxb.png" alt="social" />
                                </Column>
                            </Row>
                        </Section>

                        <Section className="w-[50%] mx-auto mt-6 text-center">
                            <Link
                                style={footerLink}
                                href="https://slackhq.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Unsubscribe
                            </Link>

                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

                            <Link
                                style={footerLink}
                                href="https://slack.com/legal"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Privacy Policy
                            </Link>

                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

                            <Link
                                style={footerLink}
                                href="https://slack.com/help"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact Support
                            </Link>
                           
                            <Text style={footerText}>
                                A25, Admiralty Homes Estate, Igbo Efon, Lekki, Lagos
                                <br />
                                © 2022 Porchplus Inc.
                            </Text>
                        </Section>

                    </Section>

                {/* </Container> */}
            </Body>
        </Html>
        
    </Tailwind>
  );
};


export default Email



  const footerText = {
    fontSize: '14px',
    color: '#000929',
    fontWeight: "500",
    // lineHeight: '15px',
    textAlign: 'center' as const,
    marginBottom: '50px',
  };
  
  const footerLink = {
    color: '#000929',
    textDecoration: 'underline',
  };
