//external import
import Swal from "sweetalert2";

class AleartMessage {
  static deleteAleart(deleteRequiest, id) {
    return Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        return deleteRequiest(id).then((result) => {
          if (result) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            return true;
          }
        });
      }
    });
  }

  static updateAleart(updateRequiest, id, status) {
    return Swal.fire({
      title: "Change Status",
      input: "select",
      inputOptions: {
        Deactive: "Deactive",
        Active: "Active",
      },
      inputValue: status,
    }).then((result) => {
      if (result.isConfirmed) {
        return updateRequiest(id, result.value).then((result) => {
          if (result) {
            Swal.fire("Update!", "Comment Update.", "success");
            return true;
          }
        });
      }
    });
  }
}

export default AleartMessage;
