import { Request, Response, NextFunction } from 'express';
import { UploadedFilesArrayZodSchema } from '../utils/uploadedFileValidationSchema';

const validateUploadedFile = (req: Request, res: Response, next: NextFunction) => {
  try {
    UploadedFilesArrayZodSchema.parse({ files: req.files });
    next();
  } catch (err: any) {
    res.status(400).json({ errors: err.errors });
  }
};

export default validateUploadedFile;
