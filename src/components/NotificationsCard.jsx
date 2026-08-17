import { IoNotificationsOutline } from "react-icons/io5";

const NotificationsCard = () => {
  return (
    <article className="cursor-pointer p-4 flex items-start justify-between bg-white border-b border-gray-200">
      <div className="flex gap-4 w-fit">
        <div className="bg-light-green h-fit text-green p-2 rounded-xl text-xl">
          <IoNotificationsOutline />
        </div>
        <div>
          <p className="text-sm font-bold">Registration confirmed</p>
          <p className="text-xs text-dark-gray">
            Congratulations your account has been successfully created!
          </p>
        </div>
      </div>
      <div className="flex items-center lg:gap-2">
        <p className="text-xs text-dark-gray">3s ago</p>
        <div className="h-2 w-2 bg-primary rounded-full"></div>
      </div>
    </article>
  );
};

export default NotificationsCard;
