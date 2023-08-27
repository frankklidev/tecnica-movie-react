
import { motion } from 'framer-motion';

function LoadingComponent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, loop: Infinity, ease: "linear" }}
                style={{
                    border: '4px solid rgba(255, 255, 255, 0.3)', 
                    borderTop: '4px solid #fff', 
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                }}
            />
            <div style={{ marginTop: '20px' }}>Cargando...</div>
        </motion.div>
    );
}

export default LoadingComponent;
