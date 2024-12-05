import mongoose from "mongoose";
import { type } from "os";

const portfolioSchema = new mongoose.Schema({

    headingFirst:{
        type:String,
        required:true
    },
    headingMain:{
        type:String,
        required:true,
        unique: true
    },
    headingLast:{
        type:String,
        required:true
    },

    paraFirst:{
        type:String,
        required:true
    },

    key_points:{
           h1:{
             key:{
                type:String,
                required:true
             },
             value:{
                type:String,
                required:true
             }
           },
           h2:{
            key:{
                type:String,
                required:true
             },
             value:{
                type:String,
                required:true
             }
           },
           h3:{
            key:{
                type:String,
                required:true
             },
             value:{
                type:String,
                required:true
             }
           },
           h4:{
            key:{
                type:String,
                required:true
             },
             value:{
                type:String,
                required:true
             }
           },
           h5:{
            key:{
                type:String,
                required:true
             },
             value:{
                type:String,
                required:true
             }
           },
           unique_selling_points:{
               h1:{
                key:{
                    type:String,
                   
                 },
                 value:{
                    type:String,
                    
                 }
               },
               h2:{
                key:{
                    type:String,
                    
                 },
                 value:{
                    type:String,
                    
                 }
               },
               h3:{
                key:{
                    type:String,
                    
                 },
                 value:{
                    type:String,
                    
                 }
               },
               h4:{
                key:{
                    type:String,
                    
                 },
                 value:{
                    type:String,
                   
                 }
               },
           }

    },
    paraLast:{
        type:String,
        
    }
    
});

export const MajorMedia = mongoose.model("MajarMediaPage",portfolioSchema);