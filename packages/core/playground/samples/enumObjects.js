module.exports = {
  schema: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "location": {
        "title": "Location",
        "enumNames": ["New York", "Amsterdam"],
        "enum": [
          {
            "lat": 40,
            "lon": 74
          },
          {
            "lat": 52,
            "lon": 5
          }
        ]
      }
    }
  },
  formData: {
    "location": {
      "lat": 52,
      "lon": 5
    }
  },
};
