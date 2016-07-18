import xlrd
import MySQLdb
import datetime
temp = 693594
# Open the workbook and define the worksheet
book = xlrd.open_workbook("stockData.xls")
sheet = book.sheet_by_name("Collated Pasted")

# Establish a MySQL connection
database = MySQLdb.connect (host="localhost", user = "root", passwd = "Welcome@1234", db = "stockData")

# Get the cursor, which is used to traverse the database, line by line
cursor = database.cursor()

# Create the INSERT INTO sql query
query = """INSERT INTO stockDatabase (currentDate, open_st, high, low, close, volume, adjClose, stock) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"""

# Create a For loop to iterate through each row in the XLS file, starting at row 2 to skip the headers
for r in range(1, sheet.nrows):
    currentDate = datetime.date.fromordinal(temp+ (int(sheet.cell(r,0).value)))
		#print "currenttime", currentDate
    open_st = sheet.cell(r,1).value
    high          = sheet.cell(r,2).value
    low     = sheet.cell(r,3).value
    close       = sheet.cell(r,4).value
    volume = sheet.cell(r,5).value
    adjClose        = sheet.cell(r,6).value
    stock       = sheet.cell(r,7).value
      

    # Assign values from each row
    values = (currentDate, open_st, high, low, close, volume, adjClose, stock)

    # Execute sql Query
    cursor.execute(query, values)

# Close the cursor
cursor.close()

# Commit the transaction
database.commit()

# Close the database connection
database.close()

# Print results
print "done"