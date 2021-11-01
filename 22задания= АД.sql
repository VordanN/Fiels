--task 1
--select 
--dbo.dbo_student.Name_ini as 'ФИО',
--dbo.predmet.Nazva,
--SUM(dbo.Reiting.Reiting) as 'Рейтинг'
--from dbo.Reiting
--inner join dbo.dbo_student on dbo.dbo_student.Kod_stud = dbo.Reiting.Kod_student
--inner join dbo.Rozklad_pids on dbo.Rozklad_pids.K_zapis = dbo.Reiting.K_zapis
--inner join dbo.Predmet_plan on dbo.Predmet_plan.K_predm_pl = dbo.Rozklad_pids.K_predm_pl
--inner join dbo.predmet on dbo.predmet.K_predmet = dbo.Predmet_plan.K_predmet
--group by dbo.dbo_student.Name_ini,dbo.predmet.Nazva
--order by dbo.dbo_student.Name_ini,dbo.predmet.Nazva

--task 2
--select
--[dbo].[dbo_student].[Kod_group] as 'Название группы',
--COUNT([Name_ini])
--from [dbo].[dbo_student]
--left join [dbo].[dbo_groups] on [dbo].[dbo_groups].[Kod_group] = [dbo].[dbo_student].[Kod_group]
--group by [dbo].[dbo_student].[Kod_group]



-- task 3 Розрахувати кількість дисциплін за групою

--select
--dbo.dbo_groups.Kod_group as 'Название группы',
--COUNT(dbo.Predmet_plan.K_predmet) as 'Kількість дисциплін'
--from dbo.Predmet_plan
--right join dbo.dbo_groups on dbo.dbo_groups.K_navch_plan = dbo.Predmet_plan.K_navch_plan
--group by dbo.dbo_groups.Kod_group


-- 4 -

--select
--dbo.dbo_groups.Kod_group as 'Group name',
--COUNT(dbo.Predmet_plan.K_predmet) as 'Past Lessons'
--from dbo.dbo_groups
--inner join dbo.Rozklad_pids on dbo.Rozklad_pids.Kod_group = dbo.dbo_groups.Kod_group
--inner join dbo.Predmet_plan on dbo.Predmet_plan.K_predm_pl = dbo.Rozklad_pids.K_predm_pl
--group by dbo.dbo_groups.Kod_group




-- 5

--select
--dbo.dbo_groups.Kod_group as 'Group Name',
--AVG(dbo.Reiting.Reiting) as 'Reiting'
--from dbo.dbo_student
--left join dbo.dbo_groups on dbo.dbo_groups.Kod_group = dbo.dbo_student.Kod_group
--left join dbo.Reiting on dbo.Reiting.Kod_student = dbo.dbo_student.Kod_stud
--group by dbo.dbo_groups.Kod_group


-- 6

--select
--dbo.predmet.Nazva as 'Subject',
--AVG(dbo.Reiting.Reiting) as 'Reiting'
--from dbo.Reiting
--inner join dbo.Rozklad_pids on dbo.Rozklad_pids.K_zapis = dbo.Reiting.K_zapis
--inner join dbo.Predmet_plan on dbo.Predmet_plan.K_predm_pl = dbo.Rozklad_pids.K_predm_pl
--inner join dbo.predmet on dbo.predmet.K_predmet = dbo.Predmet_plan.K_predmet
--group by dbo.predmet.Nazva


-- 7


--select 
--dbo.dbo_student.Name_ini as 'FName',
--dbo.Rozklad_pids.Date as 'Date',
--dbo.Reiting.Reiting as 'Grades'
--from dbo.Reiting
--inner join dbo.dbo_student on dbo.dbo_student.Kod_stud = dbo.Reiting.Kod_student
--inner join dbo.Rozklad_pids on dbo.Rozklad_pids.K_zapis = dbo.Reiting.K_zapis
--where YEAR(dbo.Rozklad_pids.Date) = 2018
--order by dbo.dbo_student.Name_ini

-- 8

--select

--dbo.dbo_student.Name_ini as 'Name',
--dbo.predmet.Nazva as 'Subject',
--MIN(dbo.Reiting.Reiting) as 'Min Grade'
--from dbo.dbo_student
--inner join dbo.Reiting on dbo.Reiting.Kod_student = dbo.dbo_student. Kod_stud
--inner join dbo.Rozklad_pids on dbo.Rozklad_pids.K_zapis = dbo.Reiting.K_zapis
--inner join dbo.Predmet_plan on dbo.Predmet_plan.K_predm_pl = dbo.Rozklad_pids.K_predm_pl
--inner join dbo.predmet on dbo.predmet.K_predmet = dbo.Predmet_plan.K_predmet
--group by dbo.dbo_student.Name_ini, dbo.predmet.Nazva
--order by dbo.dbo_student.Name_ini, dbo.predmet.Nazva

-- 9

--select

--dbo.dbo_student.Name_ini as 'Name',
--dbo.predmet.Nazva as 'Subject',
--MAX(dbo.Reiting.Reiting) as 'Max Grade'
--from dbo.dbo_student
--inner join dbo.Reiting on dbo.Reiting.Kod_student = dbo.dbo_student. Kod_stud
--inner join dbo.Rozklad_pids on dbo.Rozklad_pids.K_zapis = dbo.Reiting.K_zapis
--inner join dbo.Predmet_plan on dbo.Predmet_plan.K_predm_pl = dbo.Rozklad_pids.K_predm_pl
--inner join dbo.predmet on dbo.predmet.K_predmet = dbo.Predmet_plan.K_predmet
--group by dbo.dbo_student.Name_ini, dbo.predmet.Nazva
--order by dbo.dbo_student.Name_ini	


-- 10 

--select
--[dbo].[predmet].[Nazva],
--[dbo].[form_kontr].[forma_kontr],
--COUNT([dbo].[Rozklad_pids].[K_zapis])
--from [dbo].[Predmet_plan]
--inner join [dbo].[predmet] on [dbo].[predmet].[K_predmet] = [dbo].[Predmet_plan].[K_predmet]
--inner join [dbo].[form_kontr] on [dbo].[form_kontr].[k_fk] = [dbo].[Predmet_plan].[k_fk]
--inner join [dbo].[Rozklad_pids] on [dbo].[Rozklad_pids].[K_predm_pl] = [dbo].[Predmet_plan].[K_predm_pl]
--group by [dbo].[predmet].[Nazva], [dbo].[form_kontr].[forma_kontr]







