import { css } from "@emotion/css";

const LoginFrame = () => {
  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 640px;
        text-align: left;
        font-size: var(--font-size-xl);
        color: var(--black);
        font-family: var(--font-inter);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: var(--white);
          width: 360px;
          height: 640px;
          overflow: hidden;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 23px;
            left: calc(50% - 152px);
            font-size: 24px;
            font-weight: 300;
            display: inline-block;
            width: 304px;
            height: 33px;
          `}
        >
          <p
            className={css`
              margin: 0;
            `}
          >
            Welcome to CrisprMaestro.
          </p>
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% + 202px);
            left: calc(50% - 71px);
            border-radius: 8px;
            background-color: #426b1f;
            width: 141px;
            height: 64px;
            overflow: hidden;
            color: var(--white);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 13px);
              left: calc(50% - 30.5px);
              line-height: 130%;
              font-weight: 600;
            `}
          >
            Log In
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 103px;
            left: calc(50% - 67px);
            font-weight: 300;
            display: inline-block;
            width: 133px;
            height: 33px;
          `}
        >
          Please Log in.
        </div>
        <div
          className={css`
            position: absolute;
            top: 297px;
            left: 80px;
            width: 200px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-9xs);
            font-size: var(--input-field-label-size);
            font-family: var(--input-field-label);
          `}
        >
          <div
            className={css`
              position: relative;
              letter-spacing: 0.2em;
              text-transform: uppercase;
            `}
          >
            password
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: var(--br-9xs);
              background-color: var(--white);
              border: 2px solid var(--blue);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-6xs) var(--padding-5xs);
              gap: var(--gap-12xs);
              font-size: var(--font-size-xs);
              color: var(--false-black);
            `}
          >
            <div
              className={css`
                position: relative;
              `}
            >
              Text field data
            </div>
            <div
              className={css`
                position: relative;
                background-color: var(--false-black);
                width: 2px;
                height: 16px;
              `}
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 193px;
            left: 80px;
            width: 200px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-9xs);
            font-size: var(--input-field-label-size);
            font-family: var(--input-field-label);
          `}
        >
          <div
            className={css`
              position: relative;
              letter-spacing: 0.2em;
              text-transform: uppercase;
            `}
          >
            User name
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: var(--br-9xs);
              background-color: var(--white);
              border: 2px solid var(--blue);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-6xs) var(--padding-5xs);
              gap: var(--gap-12xs);
              font-size: var(--font-size-xs);
              color: var(--false-black);
            `}
          >
            <div
              className={css`
                position: relative;
              `}
            >
              Text field data
            </div>
            <div
              className={css`
                position: relative;
                background-color: var(--false-black);
                width: 2px;
                height: 16px;
              `}
            />
          </div>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          top: 434px;
          left: calc(50% - 29px);
          width: 57.47px;
          height: 50px;
          object-fit: cover;
        `}
        alt=""
        src="/loader-anim@2x.png"
      />
    </div>
  );
};

export default LoginFrame;
