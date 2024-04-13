from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

# URL of the website
url = "https://health.usnews.com/doctors/search"

# Parameters for the search (location and specialty or condition)
params = {
    "specialty": "cardiology",
    "location": "20057"
}

# Configure Selenium webdriver
driver = webdriver.Chrome()

# Construct the URL with parameters
url_with_params = f"{url}?{'&'.join([f'{key}={value}' for key, value in params.items()])}"

# Load the webpage
driver.get(url_with_params)

# Scroll down the page
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")


# Wait for the doctor items to be loaded (adjust the timeout as needed)
wait = WebDriverWait(driver, 10)
wait.until(EC.presence_of_element_located((By.CLASS_NAME, "item-list__OrderedListStyled-sc-18yjqdy-0")))

# Get the page source
page_source = driver.page_source

# Parse the HTML content of the webpage using BeautifulSoup
soup = BeautifulSoup(page_source, "html.parser")


# Find all list items containing doctor information
doctor_items = soup.find_all("li", class_="item-list__ListItemStyled-sc-18yjqdy-1")

# Iterate over each doctor item and extract the name, specialty, and address
for item in doctor_items[:3]:
    name = item.find("h2", class_="Heading-sc-1w5xk2o-0").text.strip()
    specialty = item.find("p", class_="Hide-kg09cx-0").text.strip()
    address = item.find("div", class_="DetailCardDoctor__DataPoint-dno04z-8").text.strip()
    image_url = item.find("img", class_="Image__PictureImage-sc-412cjc-1").get("src")

    
    print("Name:", name)
    print("Specialty:", specialty)
    print("Address:", address)
    print("Image URL:", image_url)
    print()

# Close the Selenium webdriver
driver.quit()