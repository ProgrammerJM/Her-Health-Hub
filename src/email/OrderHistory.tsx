import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import { OrderInformation } from "./components/OrderInformation";
import React from "react";

type OrderHistoryEmailProps = {
  orders: {
    id: string;
    pricePaidInCents: number;
    createdAt: Date;
    // downloadVerificationId: string;
    product: {
      name: string;
      imagePath: string;
      description: string;
    };
  }[];
};

OrderHistoryEmail.PreviewProps = {
  orders: [
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      pricePaidInCents: 10000,
      // downloadVerificationId: crypto.randomUUID(),
      product: {
        name: "Trust",
        description:
          "Trust Condom (Orange) is made with natural rubber latex. It is hygienically sealed and pre-lubricated with orange-scent silicone oil for comfort. It is",
        imagePath: "/products/e98cedb1-4ec2-469a-b01a-84f866333494-Trust.png",
      },
    },
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      pricePaidInCents: 2000,
      // downloadVerificationId: crypto.randomUUID(),
      product: {
        name: "WHISPER Super Clean and Dry 8s Wing Regular Flow",
        description:
          "Whisper Super Clean & Dry has up to 12 hours of leakage protection. Benefits: -Anti-leak barriers -Blue Lock Core -Dri-weave Cover",
        imagePath: "/products/e81bb4ac-b6d8-457d-87ad-97cdf146c269-Whisper.png",
      },
    },
  ],
} satisfies OrderHistoryEmailProps;

export default function OrderHistoryEmail({ orders }: OrderHistoryEmailProps) {
  return (
    <Html>
      <Preview>Order History</Preview>
      <Tailwind>
        <Head />
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Order History</Heading>
            {orders.map((order, index) => (
              <React.Fragment key={order.id}>
                <OrderInformation
                  order={order}
                  product={order.product}
                  // downloadVerificationId={order.downloadVerificationId}
                />
                {index < orders.length - 1 && <Hr />}
              </React.Fragment>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
