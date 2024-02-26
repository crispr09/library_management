book project is the angular fronend project for simple library management screen (still Wip)
lms-backend2 is the back end spring project for the library management
<img width="647" alt="image" src="https://github.com/crispr09/library_management/assets/45559805/2eb2b534-adc4-4e5f-939f-9a1598c992c2">

do ng install then ng serve
and mvn clean install and run to run the spring project
DB entries has to be done for admin user

INSERT INTO users VALUES('1235', 'sachin', 'password','sach1')
INSERT INTO ROLE VALUES(1,'Admin')
INSERT INTO ROLE VALUES(2,'User')
INSERT INTO user_role VALUES(1234, 1)
INSERT INTO user_role VALUES(1235, 2)
