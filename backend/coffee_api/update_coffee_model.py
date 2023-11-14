import os
import json

def generate_fixture_from_images():
    fixture_data = []

    # Assuming coffee images are named like coffee1.jpg, coffee2.jpg, etc.
    for filename in os.listdir('/Users/phil/code/tea-and-coffee/backend/coffee_api/coffee_images'):
        if filename.endswith('.jpeg') or filename.endswith('.png'):
            coffee_entry = {
                "model": "coffee_api.coffee",
                "pk": len(fixture_data) + 1,
                "fields": {
                    "image": f"coffee_images/{filename}"
                }
            }

            fixture_data.append(coffee_entry)

    # Write fixture data to a JSON file
    with open('/Users/phil/code/tea-and-coffee/backend/coffee_api/fixtures/coffee.json', 'w') as json_file:
        json.dump(fixture_data, json_file)

if __name__ == '__main__':
    generate_fixture_from_images()
