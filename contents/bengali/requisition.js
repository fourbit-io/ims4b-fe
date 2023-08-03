export const newRequisition = {
  pageTitle: "নতুন রিকুইজিশন",
  productAddBtn: "যোগ করুন",
};

export const requisitionsTable = {
  pageTitle: "রিকুইজিশনের তালিকা",
};

export const requisitionModal = {
  deleteModalContent: "আপনি কি এই রিকুইজিশন টি লিস্ট থেকে মুছে ফেলতে চান?",
  approveModalContent: "আপনি কি এই রিকুইজিশন টি পাস্ করতে চান?",
  rejectModalContent: "আপনি কি এই রিকুইজিশন টি বাতিল করতে চান?",
  releaseModalContent: "আপনি কি এই রিকুইজিশন টি খালাশ করতে চান?",
  receiveModalContent: "আপনি কি এই রিকুইজিশন টি গ্রহণ করতে চান?",
};

export const requisitionTableHeader = [
  "আইডি",
  "তারিখ",
  "আবেদনকারি",
  "দায়িত্বপ্রাপ্ত",
  "অনুমোদনকারী",
  "স্ট্যাটাস",
];

export const requisitionSelectedProductsContent = {
  pageTitle: "নিৰ্বাচিত প্রোডাক্ট",
  emptyProdContent:
    "কোনো প্রোডাক্ট বাছাই করা হয় নি। অনুগ্রহ করে প্রোডাক্ট বাছাই করুন",
  productName: "প্রোডাক্টের  নাম",
  productCode: "কোড",
  productQty: "পরিমান",
  totalItm: "মোট পরিমান",
  totalQt: "মোট পণ্য",
  note: "মন্তব্য",
  optional: "ঐচ্ছিক",
  submitBtn: "রিকোয়েস্ট করুন",
  submitBtnLoading: "অপেক্ষা করুন",
  cancelBtn: "বাতিল করুন",
};

export const editRequisition = {
  pageTitle: "রিকুইজিশন সংশোধন করুন",
  formTitle: "রিকুইজিশন সংশোধন করুন",
  productName: "প্রোডাক্টের নাম",
  productQty: "পরিমান",
  submitBtn: "সংশোধন করুন",
  loadingSubmitBtn: "অপেক্ষা করুন",
};

export const showRequisition = {
  productHeader: "প্রোডাক্ট বিস্তারিত দেখুন",
  pageTitle: "রিকুইজিশনের বিস্তারিত দেখুন ",
  productName: "প্রোডাক্টের নাম",
  productCode: "প্রোডাক্ট কোড",
  productQty: "পরিমান",
  stockQty: "স্টক পরিমান",
  productUnit: "একক",
  date: "তারিখ",
  remarks: "মন্তব্য",
  statusContent: "স্ট্যাটাস",
  createdBy: "আবেদনকারি",
  assignedBy: "দায়িত্বপ্রদান করেছেন",
  assignedTo: "দায়িত্বপ্রাপ্ত",
  approvedBy: "অনুমোদনকারী",
};

export const assignRequisition = {
  productHeader: "প্রোডাক্ট বিস্তারিত দেখুন",
  pageTitle: "রিকুইজিশনের দায়িত্বপ্রদান করুন ",
  productName: "প্রোডাক্টের নাম",
  productCode: "প্রোডাক্ট কোড",
  productQty: "পরিমান",
  productUnit: "একক",
  date: "তারিখ",
  remarks: "মন্তব্য",
  statusContent: "স্ট্যাটাস",
  createdBy: "আবেদনকারি",
  assignedBy: "দায়িত্বপ্রদান করেছেন",
  assignedTo: "দায়িত্বপ্রাপ্ত",
  approvedBy: "অনুমোদনকারী",
  storeKeepers: "স্টোরের দায়িত্বরত কর্মকর্তার তালিকা",
  placeholder: "স্টোরের দায়িত্বরত কর্মকর্তা...",
  noOptionsMessage: "কোনো কর্মকর্তা খুঁজে পাওয়া যায় নি",
  submitBtn: "দায়িত্বপ্রদান করুন",
  loadingSubmitBtn: "অপেক্ষা করুন",
};

export const requisitionStatus = {
  PENDING: "তারিখে রিকুইজিশন আবেদন করেছে।",
  MODIFIED: "তারিখে রিকুইজিশন সংশোধন করেছে।",
  ASSIGNED: "তারিখে রিকুইজিশনের দায়িত্ব দিয়েছে ",
  APPROVED: "তারিখে রিকুইজিশন অনুমোদন করেছে।",
  REJECTED: "তারিখে রিকুইজিশন বাতিল করেছে।",
  RELEASED: "তারিখে রিকুইজিশন বিতরণ করেছে।",
  DELIVERED: "তারিখে রিকুইজিশন গ্রহণ করেছে।",
};

export const requisitionReportTableHeader = [
  "কর্মচারীর আইডি",
  "কর্মচারীর নাম",
  "প্রোডাক্ট আইডি",
  "প্রোডাক্ট নাম",
  "চাহিদাপত্র তারিখ",
  "আবেদনকৃত পরিমান",
  "অনুমোদিত পরিমান",
  "অবস্থা",
];

export const requisitionFilter = {
  eId: "কর্মচারীর আইডি",
  eName: "কর্মচারীর নাম",
  reqStatus: "অবস্থা",
  startDate: "তারিখ থেকে",
  endDate: "তারিখ পর্যন্ত",
  filterOptionDefault: "যে কোনো একটি অপশন নির্বাচন করুন",
};
