import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createJob = async (req, res, next) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please Provide All Values");
  }

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res, next) => {
  res.send("get all jobs");
};

const updateJob = async (req, res, next) => {
  res.send("update a job");
};

const deleteJob = async (req, res, next) => {
  res.send("delete a job");
};

const showStats = async (req, res, next) => {
  res.send("show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
