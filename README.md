#Teachers CV api# TeachersCVApis
#Teachers CV api

#API DOCUMENTATION

Creating a new Teacher

### /api/create

	   name: String,
		experience: Number,
		classLevel: Number,
		speciality: String,
		location: String,
		isEmployed: Boolean
    
   ### usage 	
    
     "name": "Ayoola Bolu",
		"experience": "6",
		"classLevel": "1",
		"speciality": "english",
		"location": "oyo",
		"isEmployed": "true"
    
   ### response 200
   
   "speciality": "english",
    "_id": "60d2213a6d2f6b8b05f1fe0b",
    "name": "Lekan Max",
    "experience": 6,
    "classLevel": 1,
    "location": "oyo",
    "isEmployed": true,
    "createdAt": "2021-06-22T17:43:22.264Z",
    "updatedAt": "2021-06-22T17:43:22.264Z",
    "__v": 0
    
    
   ### /api/delete/id
   
        id: String
        
   ### usage
         /api/delete/60d2213a6d2f6b8b05f1fe0b
         
   ### response 200
   
     "deleted successfully"
    
    
   ### /api/update/id
      id: String
	   name: String,
		experience: Number,
		classLevel: Number,
		speciality: String,
		location: String,
		isEmployed: Boolean
    
   ### usage 	
    
     "name": "Ayoola Bolu",
		"experience": "6",
		"classLevel": "1",
		"speciality": "english",
		"location": "oyo",
		"isEmployed": "true"
    
   ### response 200
   
     "updated successfully"
  
  
  
   ### /api/search?experience=6&speciality=english&location=oyo
   
   ### response 200
   
   [
  {
    "speciality": "english",
    "_id": "60d21440a59db7582030ca88",
    "name": "Ayoola Bolu",
    "experience": 6,
    "classLevel": 1,
    "location": "oyo",
    "isEmployed": true,
    "createdAt": "2021-06-22T16:48:00.562Z",
    "updatedAt": "2021-06-22T18:02:29.477Z",
    "__v": 0
  },
  {
    "speciality": "english",
    "_id": "60d2213a6d2f6b8b05f1fe0b",
    "name": "Lekan Max",
    "experience": 6,
    "classLevel": 1,
    "location": "oyo",
    "isEmployed": true,
    "createdAt": "2021-06-22T17:43:22.264Z",
    "updatedAt": "2021-06-22T17:43:22.264Z",
    "__v": 0
  }
]
   
