export const PersonalFormvalidateFields = (inputFieldName, textData) => {
  console.log("TEsting for the input feilds", textData, inputFieldName);
  switch (inputFieldName) {
    case "email":
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(textData)) {
        return true;
      }
      return false;
    case "full_name":
      console.log("Inside");
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "father_name":
      console.log("Inside");
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "mother_name":
      console.log("Inside");
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "address":
      console.log("Inside");
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "mobile_number":
      console.log("Inside");
      if (textData.match(/^(?:\+91)?\d{10}$/)) {
        return true;
      }
      return false;
    case "date_of_birth":
      console.log("Inside");
      if (textData != null) {
        return true;
      }
      return false;
    case "level_of_education":
      console.log("Inside");
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "department":
      console.log("Inside");
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "course":
      console.log("Inside");
      if (textData.length > 3) {
        return true;
      }
      return false;

    default:
      return false;
  }
};
export const StudyFormvalidateFields = (inputFieldName, textData) => {
  console.log("TEsting for the input feilds", textData, inputFieldName);
  switch (inputFieldName) {
    case "college_name":
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "gpa":
      console.log("Inside");
      if (textData.match(/^((\d|10)(?:\.\d{1,2})?)$/)) {
        return true;
      }
      return false;
    case "file":
      console.log("Inside");
      if (textData.files[0].size < 1028 * 128) {
        return true;
      }
      return false;
    case "level_of_education":
      console.log("Inside");
      if (textData.length > 0) {
        return true;
      }
      return false;

    default:
      return false;
  }
};

export const WorkFormvalidateFields = (inputFieldName, textData) => {
  console.log("TEsting for the input feilds", textData, inputFieldName);
  switch (inputFieldName) {
    case "company":
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "start_date":
      console.log("Inside");
      if (textData !=null) {
        return true;
      }
      return false;
    case "end_date":
      console.log("Inside");
      if (textData !=null) {
        return true;
      }
      return false;
    case "designation":
      console.log("Inside");
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "description":
      console.log("Inside");
      if (textData.length > 3) {
        return true;
      }
      return false;
    default:
      return false;
  }
};

export const ScoreFormvalidateFields = (inputFieldName, textData) => {
  console.log("TEsting for the input feilds", textData, inputFieldName);
  switch (inputFieldName) {
    case "score":
      if (textData.length > 3) {
        return true;
      }
      return false;
    case "exam_name":
      if (textData.length > 0) {
        return true;
      }
      return false;
    case "upload_score":
      console.log("Inside upload score");
      if (textData.files[0].size < 1028 * 128) {
        return true;
      }
      return false;
    case "additional_data":
      console.log("Inside additiona");
      if (textData.length > 3) {
        return true;
      }
      return false;

    default:
      return false;
  }
};