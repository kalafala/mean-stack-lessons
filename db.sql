drop database mean_test;
create database mean_test;
use mean_test;
show tables;
create table employees(name varchar(25) primary key not null, dateOfBirth varchar(25) not null, gender varchar(10) not null, salary int(10));
insert into employees(name, dateOfBirth, gender, salary) values ('Kerim', 'October 20, 1974', 'Male', 50000);
insert into employees(name, dateOfBirth, gender, salary) values ('Kristen', 'September 20, 1976', 'Female', 60000);
insert into employees(name, dateOfBirth, gender, salary) values ('Alexis', 'July 16, 2005', 'Female', 500);
insert into employees(name, dateOfBirth, gender, salary) values ('Addison', 'July 23, 2008', 'Female', 500);

select * from employees;
