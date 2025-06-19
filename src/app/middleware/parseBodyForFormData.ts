import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

const parseBodyForFormData = multer().none();

export default parseBodyForFormData;
