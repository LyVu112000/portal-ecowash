import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import NormalButton from "../normalButton/Button";
import { useStylesMui } from "../../css/makeStyles";
import { Backdrop, CircularProgress, DialogContentText } from "@mui/material";

export default function DialogConfirm({
  title,
  content,
  handleCloseConfirm,
  open,
  maxWidth = "xs",
  onSave,
  loading = false,
  saveLabel = "Xác Nhận",
  isChildren = false,
  children,
}) {
  const classes = useStylesMui();
  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={maxWidth}
        open={open}
        PaperProps={{ className: classes.dialogPaper }}
      >
        <DialogTitle
          sx={{
            height: "36px",
            lineHeight: "0.2",
            fontSize: "1.2rem",
            marginLeft: "-15px",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent className={classes.dialogPaper}>
          <DialogContentText>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <div style={{ margin: "15px" }}>
              {isChildren ? children : content}
            </div>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
            }}
          >
            <div>
              <NormalButton
                onClick={handleCloseConfirm}
                label="Hủy"
                variant="contained"
              ></NormalButton>
              <NormalButton
                label={saveLabel}
                variant="contained"
                onClick={onSave}
                loading={loading}
              ></NormalButton>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
