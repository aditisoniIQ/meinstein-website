// import { message } from "statuses";
import { MajorMedia } from "../Modell/portfolioModell.js";


export const create = async(req,res)=>{

    try {
        const portfolio = new MajorMedia(req.body);
        const data = await portfolio.save();
        return res.status(200).send({data:data});


    } catch (error) {
        console.log("Error is come ", error);
        return res.status(500).send({Error:error});
    }
};

export const fetchData = async(req,res)=>{
    try {
        
        const {headingMain} = req.body;

        const data = await MajorMedia.findOne({headingMain:headingMain});

        if(!data){

            return res.status(500).send({message:"please enter valid heading"});
        }

        console.log("data is ", data);
        
        return res.status(200).send({data});
    } catch (error) {
        console.log("Error is comming to fetch the data ", error);
        return res.status(500).send({Error:error});
    }
};

export const fetchBySearch = async (req, res) => {
    try {
        const { firstField, secondField, thirdField, fourthField } = req.body;
          console.log(req.body);
             

        const data = await MajorMedia.aggregate([
            { 
                $project: {
                    firstField: 1,
                    secondField: 1,
                    thirdField: 1,
                    fourthField: 1,
                }
            }

        ]);
        console.log(data);

        const databyid = await MajorMedia.findById(data[0]);

        console.log("By id ", databyid);

        // console.log("Data is come according to user search ", databyid);
        return res.status(200).send({ data: databyid });
    } catch (error) {
        console.log("Error is come by search ", error);
        return res.status(500).send({ Error: error });
    }
};
