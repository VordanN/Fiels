--create database osbbbarabash
use osbbbarabash
--create table dom(id_dom int IDENTITY(1,1) not null primary key,
--Nomer varchar(20) constraint nomer_format check (Nomer like'[À-ÿ]%'),
--Date_enter date)

--create table pidisd
--(id_pidisd int IDENTITY(1,1) not null primary key,
--Nomer_p int,
--Kilk_kv int , 
--id_dom int not null foreign key (id_dom)references dom(id_dom)
--on delete cascade on update no action);

--create table kvartira
--(id_kvartira int IDENTITY(1,1) not null primary key,
--Nomer_kv int,
--Kil_kim int,
--Zag_pl float,
--Cor_pl float,
--id_pidisd int not null foreign key (id_pidisd)references pidisd(id_pidisd)
--on delete cascade on update no action);

--create table family
--(id_family int IDENTITY(1,1) not null primary key,
--Kil_chlen int,
--Kil_children int,
--Prizviche_naymacha varchar(20)constraint Prizviche_naymacha check (Prizviche_naymacha like'[À-ÿ]%'),
--Date_propiski date,
--Status_f varchar(20)constraint Status_f check (Status_f like'[À-ÿ]%'),
--id_kvartira int not null foreign key (id_kvartira)references kvartira(id_kvartira)
--on delete cascade on update no action);

--create table poslygi
--(id_poslygi int IDENTITY(1,1) not null primary key,
--Nazva varchar(30)constraint Nazva check (Nazva like'[À-ÿ]%'),
--Vartyst float);


--create table schot
--(id_schot int IDENTITY(1,1) not null primary key,
--Kilkist int,
--id_poslygi int not null foreign key (id_poslygi)references poslygi(id_poslygi)
--on delete cascade on update no action,
--id_kvartira int not null foreign key (id_kvartira)references kvartira(id_kvartira)
--on delete cascade on update no action);


create table prubyd_ter
(id_prubyd_ter int IDENTITY(1,1) not null primary key,
Name_y varchar(50)constraint Name_y check (Name_y like'[À-ÿ]%'),
Text_t text,
id_dom int not null foreign key (id_dom)references dom(id_dom)
on delete cascade on update no action);