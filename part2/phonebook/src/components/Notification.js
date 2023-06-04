const Notification = ({ message, error }) => {
   if (message === null || error === null) {
      return null;
   }

   return (
      <div className={error ? "danger" : "success"}>
         {message}
         {error}
      </div>
   );
};

export default Notification;
