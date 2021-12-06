-- ================================================
-- Template generated from Template Explorer using:
-- Create Scalar Function (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the function.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date, ,>
-- Description:	<Description, ,>
-- =============================================
ALTER FUNCTION TimeWorkShops
(
	-- Add the parameters for the function here
	@arrData datetime
)
RETURNS varchar(50)
AS
BEGIN
	-- Declare the return variable here
	DECLARE @day int, @time time, @result varchar(20)
	SELECT @time=CONVERT(time(0),@arrData)
	SELECT @day=DATEDIFF(day,0,@arrData)%7

	if (exists(select * from [dbo].[TimeWorkShop] where [day]=@day))
	begin
	if (exists(select * from [dbo].[TimeWorkShop] where CAST(@arrData as time) between timen and timek and [day]=@day))
	set @result ='Магазин працює'
	else 
	set @result = 'Магазин закритий'
	end

	else 
	set @result = 'Вихідний'

	RETURN @result

END
GO

SELECT [dbo].[TimeWorkShops]('2021-14-11 13:00')