use BrigradaBradley

--create table Department
--(id_department int IDENTITY(1,1) not null primary key,
--_Name varchar(50),Addres varchar(50),
--Phone_nubmer char(12) check (Phone_nubmer like '([0-9][0-9][0-9])[0-9][0-9][0-9][0-9][0-9][0-9][0-9]'))

--create table Worker
--(id_worker int IDENTITY(1,1) not null primary key,
--_Name varchar(50),
--Addres varchar(50),
--Phone_nubmer char(12) check (Phone_nubmer like '([0-9][0-9][0-9])[0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
--Brigade int not null foreign key (Brigade) references [dbo].[Brigade](id_brigade) 
--on delete cascade on update no action);

--create table Brigade
--(id_brigade int IDENTITY(1,1) not null primary key,
--_Name varchar(50),_Type varchar(50),
--Department int not null foreign key (Department) references [dbo].[Department](id_department) 
--on delete cascade on update no action);

--create table Equipment
--(id_equipment int IDENTITY(1,1) not null primary key,
--_Name varchar(50),Price float);

--create table Product
--(id_product int IDENTITY(1,1) not null primary key,
--_Name varchar(50),Price float,_Description text);

--create table Equipment_Product
--(id_equipment_Product int IDENTITY(1,1) not null primary key,
--_Time time,
--id_equipment int not null foreign key (id_equipment) references [dbo].[Equipment](id_equipment) 
--on delete cascade on update no action,
--id_product int not null foreign key (id_product) references [dbo].[Product](id_product) 
--on delete cascade on update no action);

--create table Brigade_Plan
--(
--id_brigade int not null foreign key (id_brigade) references [dbo].[Brigade](id_brigade) 
--on delete cascade on update no action,
--id_product int not null foreign key (id_product) references [dbo].[Product](id_product) 
--on delete cascade on update no action,
--id_equipment int not null foreign key (id_equipment) references [dbo].[Equipment](id_equipment) 
--on delete cascade on update no action,
--);

--create table Work_Sheet
--(
--id_equipment_Product int not null foreign key (id_equipment_Product) references [dbo].[Product](id_product) 
--on delete cascade on update no action,
--id_worker int not null foreign key (id_worker) references [dbo].[Worker](id_worker) 
--on delete cascade on update no action,
--Ammount int,
--_Shift smallint check (_Shift in (0,1)),
--_Date date

--);

--insert into [dbo].[Department]([_Name],[Addres],[Phone_nubmer]) values 
--('БорщИндестрис','Суп 14 кв 5','(114)1234567'),
--('ЧайИндрестрис','Чай 1 кв 26','(187)1635178'),
--('РедБулИндастрис(синий)','Енергетик 62','(124)9652261');

--insert into [dbo].[Brigade] ([_Name],[_Type],[Department]) values
--('СУПеры','Готовлят','3'),
--('Кладмены','Розносят чай','4'),
--('РедБулики','Снимают Рекламу','5');

--insert into [dbo].[Worker]([_Name],[Addres],[Phone_nubmer],[Brigade]) values
--('Вася','Миколаив 13367','(098)1168227','1'),
--('Мишка','Житомир 5 кв 6','(098)8862129','2'),
--('Даня','Грушевського 5','(098)5767899','3');


insert into [dbo].[Work_Sheet]([id_worker],[Ammount],[_Shift],[_Date]) values
('1','5','1','05.12.2001'),
('2','7','0','25.01.1950'),
('3','15','1','15.06.2008');