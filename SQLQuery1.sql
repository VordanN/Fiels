use [torgfirmaBradley]

--select * from [dbo].[Zakaz] where Date_rozm > '2021-0-01' and Date_rozm < '2021-05-31'

--select * from [dbo].[Zakaz] where year(Date_rozm) = year(GETDATE()) and month(Date_rozm) > month(GETDATE())-6

--select Date_rozm from [dbo].[Zakaz] where
--DATEDIFF(MONTH, Date_rozm, GETDATE()) < 6

select top 2 * from [dbo].[tovar] order by price desc