export interface User {
  _id:              string;
  avatar:           string;
  firstName:        string;
  lastName:         string;
  age:              number;
  sex:              Sex;
  status:           Status;
  subscriptionTier: SubscriptionTier;
}

type Sex = "male" | "female";

type Status = "complicated" | "relationship" | "single";

type SubscriptionTier =  "basic" | "business" | "free";
