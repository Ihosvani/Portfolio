export interface Main_Personal_Project{
  name: String,
  date_of_completion?: Date,
  github_url: String,
  url?: String,
  completed: Boolean,
  picture: String,
  reward_experiences: String[],
  stack : String[],
  system_design: String
}
export interface Main_School_Projects extends Main_Personal_Project{
  class: String
}
