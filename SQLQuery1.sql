


--Create Table test_table_pivot(
--	[fio] [varchar](50) NULL,
--	[year] [int] NULL,
--	[summa] [float] NULL
--) on [PRIMARY]
--go

--select 
--fio,
--god,
--sum(summa) AS summa
--from dbo.test_table_pivot
--group by fio,god

--Select
--fio,
--god,
--sum(summa) as summa
--from dbo.test_table_pivot
--group by fio,god
--order by fio,god

--select
--fio,
--[2011],[2012],[2013],[2014],[2015]
--from dbo.test_table_pivot
--pivot (sum(summa)for god in ([2011],[2012],[2013],[2014],[2015])) as test_pivot


--select 
--t.fio,
--sum(case when t.god = '2015' then t.summa end) as '2015'
--from test_table_pivot t
--group by t.fio
--order by t.fio

--select 
--t.fio,
--sum(case when t.god = '2015' then t.summa end) as '2015',
--sum(case when t.god = '2016' then t.summa end) as '2016',
--sum(case when t.god = '2014' then t.summa end) as '2014'
--from test_table_pivot t
--group by t.fio
--order by t.fio;

--select 
--t.fio,
--sum(case when t.god = '2015' then t.summa end) as '2015',
--sum(case when t.god = '2016' then t.summa end) as '2016',
--sum(case when t.god = '2014' then t.summa end) as '2014'
--sum(t.summa) as total_sum
--from test_table_pivot t
--group by t.fio
--order by t.fio;

--select 
--t.fio,
--sum(case when t.god = '2015' then t.summa end) as '2015',
--sum(case when t.god = '2016' then t.summa end) as '2016',
--sum(case when t.god = '2014' then t.summa end) as '2014'
--sum(t.summa) as total_sum
--from test_table_pivot t
--group by rollup(t.fio)
--order by t.fio desc;

--select t.god,t.fio,sum(t.summa) as summ
--from test_table_pivot t
--group by cube(t.god,t.fio);

--select coalesce(cast(t.god as varchar(30)),'total_sum') as god, coalesce(t.fio,'total_sum') as fio,
--sum(t.summa) as summa
--from test_table_pivot t
--group by cuve(t.god,t.fio);

--select *
--from, (select coalesce(cast(t.god as varchar(30)),'total_sum') as god, coalesce(t.fio,'total_sum') as fio,
--sum(t.summa) as summa
--from test_table_pivot t
--group by cube(t.god,t.fio) t
--pivot(sum(summa))
--for god in ("2015","2016","2014","total_sum") pvt;


--with cte
--as (
--	select coalesce(cast(t.god as varchar(30)),'total_sum') as god,
--	  coalesce(cast(t.fio,'total_sum') as fio,
--	  sum(t.summa) as summa
--	  from test_table_pivot t
--	  group by cube(t.god,t.fio)
--	  )
--select distinct t.fio,
--a.summa as '2015',
--b.summa as '2016',
--c.summa as '2014',
--ts.summa as tital_sum
--from cte t
--left join cte a
--on t.fio = a.fio and a.god, = '2015'
--left join cte b
--on t.fio = b.fio and b.god, = '2016'
--left join cte c
--on t.fio = c.fio and c.god, = '2014'
--left join cte ts
--on t.fio = ts.fio and ts.god = 'total_sum'
--order by fiom

--declare @colnames as nvarchar(max);
--select @colnames = stuff((select distinct ', ' + '"'(t.god as varchar(30)) + '"' 
--from test_table_pivot t
--for xml path ('')
--), 1,1 '') + ', "total_sum';
--print @colnames


--Create Table post(
--	id_p int Primary Key,
--	name varchar(50) NULL
--);

--Create Table tovar(
--	id int NOT NULL Primary Key,
--	city varchar(50) NULL,
--	count int NULL,
--	tovar varchar(50) NULL,
--	id_post int not null foreign key (id_post) references [dbo].[post](id_p) 
--	on delete cascade on update no action
--);


select t.tovar,
	sum(case when name = '	Mentzer Media Services' then t.count end) as 'Mentzer Media Services',
	sum(case when name = 'Targeted Victory' then t.count end) as 'Targeted Victory',
	sum(case when name = 'Facebook Inc' then t.count end) as 'Facebook Inc'
from dbo.tovar t
inner join post on t.id_post = post.id_p
group by t.tovar
order by t.tovar;
