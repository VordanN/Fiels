--create database torgfirmabarabash
use torgfirmaBarabash
--create table postachalnik(id_postach int IDENTITY(1,1) not null primary key,
--Nazva varchar(20) constraint nazva_format check (Nazva like'[�-�]%'),
--Index_p char(5)constraint ind_format check (index_p like'[0-9][0-9][0-9][0-9][0-9]')
--default 10000,
--Addr varchar(50),
--City varchar(20) constraint city_format check (City like'�. [�-�]%'),
--Region varchar(50),
--tel char(12)check (tel like'([0-9][0-9][0-9])[0-9][0-9][0-9][0-9][0-9][0-9][0-9]') )
--create table tovar
--(id_tovar int IDENTITY(1,1) not null primary key,
--Nazva_t varchar(20)constraint nazva_tf check (Nazva_t like'[�-�]%'),
--Min_zap int check (Min_zap>0)default 
--10, Zap_skl int,price money,
--post_prek smallint check (post_prek in(0,1)),
--id_postach int not null foreign key (id_postach)references postachalnik(id_postach)
--on delete cascade on update no action);

--create table klient
--(id_klient int IDENTITY(1,1) not null primary key,
--Nazva varchar(20)constraint nazva_klient check (Nazva  like'[�-�]%'),
--Index_p char(5)constraint ind_klient check (index_p like'[0-9][0-9][0-9][0-9][0-9]')
--default 10000,Addr varchar(50),
--City varchar(20) constraint city_klient check (City like'�. [�-�]%'),
--Region varchar(50),tel char(12)check (tel like'([0-9][0-9][0-9])[0-9][0-9][0-9][0-9][0-9][0-9][0-9]'))

--create table Sotrudnik
--(id_sotrudnik int identity(1,1)not null primary key,
--Fname varchar(20)constraint Fname_sotrudnik check (Fname like'[�-�]%'),
--Name varchar(20)constraint name_sotrudnik check (name like'[�-�]%'),
--Posada varchar(40)constraint posada_sotrudnik check (posada like'[�-�]%'),
--Date_enter date,Date_birthday date,
--Index_p char(5)constraint ind_sotrudnik check (index_p like'[0-9][0-9][0-9][0-9][0-9]')
--default 10000,Adress varchar(50),City varchar(20)
--constraint city_sotrudnik check (city like'[�-�]%'),
--Region varchar(20)constraint region_sotrudnik check (region like'[�-�]%'),
--Country varchar(20)constraint country_sotrudnik check (country like'[�-�]%'),
--Tel char (12)check (tel like'([0-9][0-9][0-9])[0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
--Foto varchar(50),Note text)

--create table Zakaz(
--K_zakaz int identity(1,1)primary key,
--K_klien int references klient(id_klient),
--K_sotrud int references sotrudnik(id_sotrudnik),
--Date_rozm date default getdate(),
--Date_naznach date default getdate()+10)

--create table zakaz_tovar
--(id_zakaz int not null references zakaz(K_zakaz ) on update cascade  on delete cascade,
--id_tovar int not null references tovar(id_tovar) on update no action on delete cascade,
--kilk int check (kilk>0),znigka decimal (3,2) 
--primary key(id_zakaz, id_tovar)) 

--insert into [postachalnik]([Nazva], [Index_p],[Addr], [Region]) values ('����','10024','�������� 10','�����������'),
--('�����','10021','��������� 3','������������'),
--('����','10020','�������� 90','��������')

--insert into [klient]([Nazva], [Index_p],[Addr],[City], [Region],[tel]) values 
--('����','10024','�������� 10','�. �������','�����������','(050)2325645'),
--('�����','10021','�������� 50','�. ����','������������','(050)1325645'),
--('����','10022','������� 12','�. ������','����������','(050)2323545')

--insert into [Sotrudnik]([Fname],[Name],[Posada],[Date_enter],[Date_birthday],[Index_p],[Adress],[City],[Region],[Tel]) values
--('���������','����','����','2021-09-09','2001-05-04','10024','�������� 10','�. �������','�����������','(050)2325645'),
--('�������','����','��������','2021-04-05','1990-01-15','10021','��������� 15','�. ��������','�����������','(050)1225641'),
--('����','����','���������','2019-05-21','1991-05-29','10023','��������� 25','�. ��������','�����������','(050)1224557')

--insert into [tovar]([Nazva_t],[Min_zap],[Zap_skl],[price],[post_prek],[id_postach]) values
--('����','5000','120','50','0',5),
--('ٸ���','2000','520','30','0',6),
--('�����','5200','60','30','1',7)

--insert into [Zakaz]([K_klien],[K_sotrud],[Date_rozm],[Date_naznach]) values
--(1,1,'2021-05-09','2021-05-05'),
--(2,2,'2021-06-05','2021-06-03'),
--(3,3,'2021-05-05','2021-05-02')


--insert into [zakaz_tovar]([id_zakaz],[id_tovar],[kilk],[znigka]) values
--(1,2,1,'0.20'),
--(1,3,2,'0.30'),
--(1,4,3,'0.15')

select * from [dbo].[Sotrudnik] where Country is NULL or Tel is NULL