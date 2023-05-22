# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
@startuml entity SelectedOption <>

entity Option <> entity Option.id <> #ffffff entity Option.text <> #ffffff entity Option.type <> #ffffff

entity Answer <> entity Answer.id <> #ffffff entity Answer.text <> #ffffff entity Answer.date <> #ffffff entity Answer.userId <> #ffffff

entity Expert <> entity Expert.id <> #ffffff

entity User <> entity User.username <> #ffffff entity User.mail <> #ffffff entity User.password <> #ffffff entity User.id <> #ffffff

entity Question <> entity Question.id <> #ffffff entity Question.text <> #ffffff entity Question.type <> #ffffff

entity Quiz <> entity Quiz.id <> #ffffff entity Quiz.text <> #ffffff entity Quiz.type <> #ffffff entity Quiz.topic <> #ffffff entity Quiz.date <> #ffffff entity Quiz.state <> #ffffff

User.username -u-* User User.mail -u-* User User.password -u-* User User.id -u-* User

Expert.id -d-* Expert

Option.id -u-* Option Option.text -u-* Option Option.type -u-* Option

Answer.id -u-* Answer Answer.text -u-* Answer Answer.date -u-* Answer Answer.userId -u-* Answer

Question.id -u-* Question Question.text -u-* Question Question.type -u-* Question

Quiz.id -d-* Quiz Quiz.text -d-* Quiz Quiz.type -d-* Quiz Quiz.topic -d-* Quiz Quiz.date -d-* Quiz Quiz.state -d-* Quiz

User "1,0" -u- "1, 1" Expert Expert "0,"-r- "1,1" Answer Question"1,1"-l- "0," Answer Quiz "1,1" -d- "0," Question Question "1,1" -d- "0," Option Answer"1,1" -u- "0," SelectedOption SelectedOption"1,1"-u- "0,"Option @enduml
- ER-модель
- реляційна схема
