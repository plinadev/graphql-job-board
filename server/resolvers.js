import {
  createJob,
  deleteJob,
  getJob,
  getJobs,
  getJobsByCompany,
  updateJob,
} from "./db/jobs.js";
import { getCompany } from "./db/companies.js";
import { GraphQLError } from "graphql";

export const resolvers = {
  Query: {
    company: async (_root, args) => {
      const company = await getCompany(args.id);
      if (!company) {
        throw notFoundError("No company found with id - " + id);
      }
      return company;
    },
    job: async (_root, args) => {
      const job = await getJob(args.id);
      if (!job) {
        throw notFoundError("No job found with id - " + id);
      }
      return job;
    },
    jobs: () => getJobs(),
  },
  Mutation: {
    createJob: (_root, { input: { title, description } }) => {
      const companyId = "FjcJCHJALA4i";
      return createJob({ companyId, title, description });
    },
    deleteJob: (_root, { id }) => deleteJob(id),
    updateJob: (_root, { id, title, description }) =>
      updateJob({ id, title, description }),
  },
  Company: {
    jobs: (company) => getJobsByCompany(company.id),
  },
  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => toIsoDate(job.createdAt),
  },
};

function notFoundError(message) {
  return new GraphQLError(message, {
    extensions: { code: "NOT_FOUND" },
  });
}
function toIsoDate(value) {
  return value.slice(0, "yyy-mm-dd".length);
}
