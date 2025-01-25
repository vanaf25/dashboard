import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

interface DocumentHeaderProps {
    customers: any;
    profiles: any;
    type: string;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 20px',
        marginBottom: 10,
    },
    section: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 12,
        marginBottom: 2,
        fontWeight:400,
    },
    contractText: {
        fontWeight:12,
        marginBottom: 14,
        padding: '0 20px',
    },
    highlight: {
        backgroundColor: '#FFFF00', // Yellow highlight
    },
});

const DocumentHeader: React.FC<DocumentHeaderProps> = ({ customers, profiles, type }) => {
    console.log('customer address:',customers.address);
    return (
        <>
            <View style={styles.container}>
                {/* Customer Details */}
                <View style={styles.section}>
                    <Text style={styles.title}>Customer Info</Text>
                    <Text style={styles.text}>Name: {customers.name}</Text>
                    <Text style={styles.text}>Email: {customers.email}</Text>
                    <Text style={styles.text}>Phone: {customers.phone}</Text>
                    <Text style={styles.text}>
                        Address: {`${customers.address} ${customers.city} ${customers.state}. ${customers.zip}`}
                    </Text>
                </View>

                {/* Estimator Details */}
                <View style={styles.section}>
                    <Text style={styles.title}>Estimator Info</Text>
                    <Text style={styles.text}>Signee: {profiles?.username}</Text>
                    <Text style={styles.text}>Company Email: {profiles?.company_email}</Text>
                    <Text style={styles.text}>Company Phone: {profiles?.phone}</Text>
                </View>
            </View>

            {/* Contract Text */}
            {type === 'contract' && (
                <View style={styles.contractText}>
                    <Text style={styles.text}>
                        Hereafter company refers to:{' '}
                        <Text style={styles.highlight}>{customers.name}</Text>
                    </Text>
                    <Text style={styles.text}>
                        Hereafter client, owner and customer refers to{' '}
                        <Text style={styles.highlight}>{profiles.username}</Text> and their spouse or life
                        partner.
                    </Text>
                </View>
            )}
        </>
    );
};

export default DocumentHeader;
