import { CardDetailService } from "./CardServiceDetail";

export const ServicesGrid = ({ services }) => {
  return (
    <div className="container">
      {services.map((serv) => (
        <CardDetailService
          key={serv.id}
          id={serv.id}
          serviceName={serv.serviceName}
          price={serv.price}
        />
      ))}
    </div>
  );
};
