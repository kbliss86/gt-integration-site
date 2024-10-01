//logic for handling integration operations (CRUD, API Calls, etc.)
const HallmarkClientMappingTable = require('../models/HallmarkClientMappingTable');
const HallmarkcertMappingTable = require('../models/HallmarkCertMappingTable');
const HallmarkSpecMappingTable = require('../models/HallmarkSpecMappingTable');
const HallmarkStagingView = require('../models/HallmarkStagingView');
const HallmarkStagingTable = require('../models/HallmarkStagingTable');
const HallmarkIssuesTable = require('../models/HallmarkIssuesTable');
const HallmarkApiResponseLog = require('../models/HallmarkApiResponseLog');

//Get /integrations
//Fetch data for staging/stagingview/mapping/issues
exports.getIntegrations = async (req, res) => {
    try{
        const staging = await HallmarkStagingTable.findAll();
        const stagingView = await HallmarkStagingView.findAll();
        const clientMapping = await HallmarkClientMappingTable.findAll();
        const certMapping = await HallmarkcertMappingTable.findAll();
        const specMapping = await HallmarkSpecMappingTable.findAll();
        const issues = await HallmarkIssuesTable.findAll();
        res.status(200).json({ staging, stagingView, clientMapping, certMapping, specMapping, issues });
    } catch(err){
        res.status(500).json({ message: err.message });
    }
}

//POST /integrations/api-call
//Logic to handle triggering an API call to CTM
exports.triggerApiCall = async (req, res) => {
    //loop though stagingView and make API call for each record
    const stagingView = await HallmarkStagingView.findAll();
    stagingView.forEach(async (record) => {
        //make API call
        //store response in ApiResponseLog
        const response = await makeApiCall(record);
        //record responses in HallmarkApiResponseLog
        await HallmarkApiResponseLog.create({ response });
    });
}