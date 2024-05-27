import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const navigation = useNavigate();
  const token = localStorage.token;
  const user = localStorage.user;
  if (!token & !user) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "You Need to Login First",
      showConfirmButton: false,
      timer: 1500,
    });
    navigation("/login");
  } else {
    navigation("/login");
  }

  return (
    <div>
      <h1 className="text-3xl text-center underline uppercase ">
        Inventory Page
      </h1>
    </div>
  );
};

export default Home;
