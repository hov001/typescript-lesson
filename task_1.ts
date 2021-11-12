interface IAplicant {
  applicantExams: IAplicantExams[];
  attachmentResponseModels: IAttachment[];
  commentCount: number;
  comments: IComments[];
  date: string;
  discount: number;
  email: string;
  finalScore: number;
  group: IGroup;
  hasDebt: boolean;
  id: number;
  isCertificateGiven: boolean;
  isOpenToWork: boolean;
  name: string;
  nameEn: string;
  nameHy: string;
  phoneNumber: string;
  registrationSource: RegistrationSource;
  status: Status;
  totalAbsents: number;
  uuid: string;
}

interface IAplicantExams {
  applicantId: number;
  examId: number;
  examType: string;
  grade: number;
  id: number;
  title: string;
}

interface IAttachment {
  attachmentId: number;
  attachmentType: string;
  link: string;
  name: string;
}

interface IComments {
  commenterAvatar: string;
  commenterUsername: string;
  content: string;
  createdAt: string;
  id: number;
}

interface IGroup {
  completenessPercentage: number;
  course: ICourse;
  courseFormat: string;
  description: string;
  duration: IDuration;
  endDate: string;
  groupInstructors: IGroupInstructors[];
  groupState: GroupState;
  id: number;
  lessons: ILessons[];
  number: number;
  numberOfLessons: number;
  projectCoordinator: IProjectCoordinator;
  schedule: IShedule;
  slackLink: string;
  startDate: string;
  tuitionFee: ITuitionFee;
}

interface ICourse {
  defaultDuration: IDefaultDuration;
  defaultProjectCoordinator: IDefaultProjectCoordinator;
  defaultTuitionFee: IDefaultTuitionFee;
  emailTemplate: string;
  expectedNumberOfApplicants: number;
  id: number;
  level: number;
  name: string;
  track: ITrack;
  uuid: string;
}

interface IDefaultDuration {
  timeScale: string;
  value: number;
}

interface IDefaultProjectCoordinator {
  avatar: string;
  colorHex: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
  roles: string[];
  username: string;
}

interface IDefaultTuitionFee {
  amount: number;
  currency: string;
  feeClientType: string;
}

interface ITrack {
  id: number;
  instructors: IInstructors[];
  name: string;
}

interface IInstructors {
  comments: IInstructorsComments[];
  email: string;
  id: number;
  linkedInProfile: string;
  name: string;
  phoneNumber: string;
  signatureLink: string;
  status: string;
  tracks: ITrack[];
  uuid: string;
}

interface IInstructorsComments {
  commenterAvatar: string;
  commenterUsername: string;
  content: string;
  createdAt: string;
  id: number;
}

interface IDuration {
  timeScale: string;
  value: number;
}

interface IGroupInstructors {
  instructorId: number;
  instructorType: InstructorType;
  name: string;
  salary: ISalary;
}

interface ISalary {
  amount: number;
  currency: Currency;
  salaryType: SalaryType;
}

interface ILessons {
  courseName: string;
  dayOfWeek: DayOfWeek;
  endDate: string;
  groupMetadata: IGroupMetadata;
  id: number;
  lessonState: LessonState;
  slackLink: string;
  startDate: string;
}

interface IGroupMetadata {
  groupNumber: number;
  id: number;
}

interface IProjectCoordinator {
  avatar: string;
  colorHex: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
  roles: Role[];
  username: string;
}

interface IShedule {
  dayOfWeek: DayOfWeek;
  endHour: string;
  groupId: number;
  id: number;
  startHour: string;
}

interface ITuitionFee {
  amount: number;
  currency: Currency;
  feeClientType: FeeClientType;
}

enum RegistrationSource {
  IMPORTED = "IMPORTED",
  MANUAL = "MANUAL",
  TILDA = "TILDA",
  WEBSITE = "WEBSITE",
}

enum Status {
  APPLIED_ONLY = "APPLIED_ONLY",
  ARCHIVED = "ARCHIVED",
  ENROLLED = "ENROLLED",
  EXAM_FAILED = "EXAM_FAILED",
  EXAM_PASSED = "EXAM_PASSED",
  EXAM_SCHEDULED = "EXAM_SCHEDULED",
  EXAM_WAITLIST = "EXAM_WAITLIST",
  INTERVIEW_FAILED = "INTERVIEW_FAILED",
  INTERVIEW_PASSED = "INTERVIEW_PASSED",
  INTERVIEW_SCHEDULED = "INTERVIEW_SCHEDULED",
  INTERVIEW_WAITLIST = "INTERVIEW_WAITLIST",
  ON_HOLD = "ON_HOLD",
  REDIRECTED = "REDIRECTED",
  RESCHEDULED = "RESCHEDULED",
}

enum InstructorType {
  ASSISTANT = "ASSISTANT",
  LECTURER = "LECTURER",
  TUTOR = "TUTOR",
}

enum Currency {
  AMD = "AMD",
  EUR = "EUR",
  USD = "USD",
}

enum SalaryType {
  HOURLY = "HOURLY",
  MONTHLY = "MONTHLY",
  PER_COURSE = "PER_COURSE",
}

enum GroupState {
  ONGOING = "ONGOING",
  ON_HOLD = "ON_HOLD",
  PLANNING = "PLANNING",
  TERMINATED = "TERMINATED",
  WAITING_FOR_DEMO = "WAITING_FOR_DEMO",
}

enum DayOfWeek {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

enum LessonState {
  COMPLETED = "COMPLETED",
  MISSED = "MISSED",
  UPCOMING = "UPCOMING",
}

enum Role {
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_CUSTOMER_CARE_SPECIALIST = "ROLE_CUSTOMER_CARE_SPECIALIST",
  ROLE_MODERATOR = "ROLE_MODERATOR",
  ROLE_PROGRAM_MANAGER = "ROLE_PROGRAM_MANAGER",
  ROLE_PROJECT_COORDINATOR = "ROLE_PROJECT_COORDINATOR",
}

enum FeeClientType {
  MONTHLY = "MONTHLY",
  PER_COURSE = "PER_COURSE",
}
