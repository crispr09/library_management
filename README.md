book project is the angular fronend project for simple library management screen (still Wip)
lms-backend2 is the back end spring project for the library management

do ng install then ng serve
and mvn clean install and run to run the spring project
DB entries has to be done for admin user

INSERT INTO users VALUES('1235', 'sachin', 'password','sach1')
INSERT INTO ROLE VALUES(1,'Admin')
INSERT INTO ROLE VALUES(2,'User')
INSERT INTO user_role VALUES(1234, 1)
INSERT INTO user_role VALUES(1235, 2)
