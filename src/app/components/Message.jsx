export const Message = ({ message, type }) => {
  return (
    <div className={`card animate__animated animate__fadeIn bg-${type}`}>
      <div className="card-body text-center text-white">{message}</div>
    </div>
  );
};
