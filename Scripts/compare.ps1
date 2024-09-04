


# Your PowerShell code here
net accounts | Out-File -FilePath ".\Scripts\file1.txt"

# # Define the paths to the files
# $outputFile = "C:\Users\hp\OneDrive\Desktop\Hackathon\Code\output.txt"  #system configurations
# $textFile = "C:\Users\hp\OneDrive\Desktop\Hackathon\Code\defaultconfig.txt"  #default configurations stored on server.
# $resultFile = "C:\Users\hp\OneDrive\Desktop\Hackathon\Code\result.txt"   #unmatched configurations

# # Read the contents of the files
# $outputContent = Get-Content -Path $outputFile
# $textContent = Get-Content -Path $textFile

# # Compare the contents and get the differences
# $differences = Compare-Object -ReferenceObject $outputContent -DifferenceObject $textContent

# # Filter out the differences and save to the result file
# $differences | Where-Object { $_.SideIndicator -ne "==" } | ForEach-Object { $_.InputObject } | Out-File -FilePath $resultFile

$file1 = Get-Content ".\Scripts\file1.txt" #system configurations
$file2 = Get-Content ".\Scripts\file2.txt" #default configurations

$unmatched1 = Compare-Object -ReferenceObject $file1 -DifferenceObject $file2 -PassThru | Where-Object { $_.SideIndicator -eq "<=" }
$unmatched2 = Compare-Object -ReferenceObject $file2 -DifferenceObject $file1 -PassThru | Where-Object { $_.SideIndicator -eq "<=" }

$unmatchedCount = $unmatched1.Count


Write-Output "$unmatchedCount unmatched configurations in your system found" > ".\Scripts\result.txt"
Write-Output "" >> ".\Scripts\result.txt"

$unmatched1 >> ".\Scripts\result.txt"
Write-Output "" >> ".\Scripts\result.txt"

Write-Output "Required configurations:" >> ".\Scripts\result.txt"

$unmatched2 >> ".\Scripts\result.txt"

Set-Content -Path "./Scripts/result.txt" -Value (Get-Content -Path "./Scripts/result.txt") -Encoding UTF8





