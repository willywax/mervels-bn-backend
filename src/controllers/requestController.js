/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import requestService from '../services/requestService';
import Response from '../utils/response';

/** Class representing a password util. */
class Requests {
  /**
   * @param {object} req request
   * @param {object} res response
   * @param {object} next middleware details
   * @return {function} requests
   */
  async trip(req, res, next) {
    const request = {
      from: req.body.from,
      travelDate: req.body.travelDate,
      reason: req.body.reason,
      user: req.user.id
    };
    try {
      const result = await requestService.addRequest(request, req.body.accommodations);
      return Response.customResponse(
        res,
        200,
        'Your request has been forwarded successfully',
        result
      );
    } catch (error) {
      next(error);
    }
  }

  /**
   * @param {object} req request
   * @param {object} res response
   * @param {object} next middleware
   * @return {function} requests
   */
  async getMyRequests(req, res) {
    try {
      const data = await requestService.findRequestsByUser(req.user.id);
      return Response.customResponse(res, 200, 'Your requests were retrieved successfully', data);
    } catch (error) {
      return Response.errorResponse(res, 500, 'Something went wrong', error);
    }
  }
}
export default new Requests();