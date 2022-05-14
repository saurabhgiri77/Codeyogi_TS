export type users = {
  picture: { large: string };
  name: { title: string; first: string; last: string };
  login: { password: string };
};

export type lecture = {
  id: number;
  start_time: string;
  end_time: string;
  topic: string;
  recording_url: string;
};

export type assignment = {
  id: number;
  updated_at: string;
  due_date: string;
  title: string;
  // submissionLink: string;
  // onInputChange: any;
  // submit: any;
  // popupClose: any;
  // validUrl: boolean;
  // error: string;
};

export type popup = {
  id: number;
  submissionLink: any;
  onChange: any;
  onSubmit: any;
  popupClose: any;
  validUrl: boolean;
  error: string;
  name: string;
  value: string;
};

export type profileType = {
  first_name: string;
  last_name: string;
  email: string;
  year_of_pass_out: number;
  phone_no: number;
  dob: string;
  work_device: string;
  institute_roll_no: number;
  branch: string;
};
